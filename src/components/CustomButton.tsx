import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

interface Props {
  href: string;
  text: string;
}

const CustomButton = ({ href, text }: Props): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Button
      color="primary"
      variant="text"
      sx={{
        color: theme.palette.text.primary,
        textTransform: "uppercase",
        mx: 1.5,
        marginLeft: "15px",
        "&:active": {
          color:
            theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.success.dark,
        },
        "&:hover": {
          color:
            theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.success.dark,
        },
      }}
      onClick={() => navigate(href)}>
      {text}
    </Button>
  );
};

export default CustomButton;