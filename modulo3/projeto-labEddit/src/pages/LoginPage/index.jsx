import { Visibility, VisibilityOff } from "@mui/icons-material";
import {  FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React from "react";
import logo from '../../assets/logo.png'
import * as S from './styled'

export function LoginPage() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return <S.Container>
 
<S.FormContainer>
<img src={logo} alt="logo" width='50px' />
   <Typography variant="h2">LabEddit</Typography>
    <Typography  variant="subtitle1" >O projeto de rede social da Labenu</Typography>
  
    <TextField label="Nome" variant="outlined" />

    <div style={{marginTop:'1rem'}}></div>
    {/* <TextField 
     id="outlined-adornment-password"
     type={values.showPassword ? "text" : "password"}
     value={values.password}
     onChange={handleChange("password")}
     InputLabelProps={
       <InputAdornment position="end">
         <IconButton
           onClick={handleClickShowPassword}
           onMouseDown={handleMouseDownPassword}
           edge="end"
         >
           {values.showPassword ? <VisibilityOff /> : <Visibility />}
         </IconButton>
       </InputAdornment>
     }

    label="Senha" variant="outlined" 
    /> */}
    
   
<FormControl >
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> 
       <OutlinedInput
        id="outlined-adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />

      <S.StyleButton variant="contained">Continuar</S.StyleButton>

<S.StyleButton variant="outlined">Crie uma conta</S.StyleButton>


    {/* <TextField label="Senha"  variant="outlined" id="Senha"  /> */}
    </FormControl>

    </S.FormContainer>
  </S.Container>;
}
