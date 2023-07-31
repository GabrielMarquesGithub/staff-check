import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type IRootHeaderBrandProps = { company: string };

const RootHeaderBrand = ({ company }: IRootHeaderBrandProps) => {
  return (
    <Box>
      <Typography
        component="h1"
        variant="h1"
        color={(theme) => theme.palette.text.highlighted}
      >
        StaffCheck
      </Typography>
      <Typography component="h2" variant="subtitle1">
        {company}
      </Typography>
    </Box>
  );
};

export { RootHeaderBrand };
