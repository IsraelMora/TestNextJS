import { Button, Card, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <Card className="w-72 h-72 text-center flex flex-col justify-around items-center">
      <Typography variant="h5">Inicia seccion para continuar</Typography>
      <TextField
        className="w-3/4"
        label="Usuario"
        variant="outlined"
        helperText="Usuario = 'Esposa'"
      />
      <TextField
        className="w-3/4"
        label="Contraseña"
        variant="outlined"
        type="password"
        helperText="Contraseña = 'TeAmo'"
      />
      <Link href="about">
        <Button color="primary" variant="outlined">
          Ingresar
        </Button>
      </Link>
    </Card>
  );
}
