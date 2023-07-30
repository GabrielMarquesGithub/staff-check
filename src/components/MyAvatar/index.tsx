import Avatar from "@mui/material/Avatar";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2) // Exibir apenas as duas primeiras iniciais
    .join("");

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

type IMyAvatarProps = {
  name: string;
};

const MyAvatar = ({ name }: IMyAvatarProps) => {
  return <Avatar variant="rounded" {...stringAvatar(name)} />;
};

export { MyAvatar };
