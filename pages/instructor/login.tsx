// import { Button, ButtonBase, Divider, Stack, styled } from "@mui/material";
// import AppCheckBox from "components/AppCheckBox";
// import FlexBetween from "components/flexbox/FlexBetween";
// import FlexBox from "components/flexbox/FlexBox";
// import AppTextField from "components/input-fields/AppTextField";
// import { Small } from "components/Typography";
// import Facebook from "icons/Facebook";
// import GoogleIcon from "icons/GoogleIcon";
// import Twitter from "icons/Twitter";
// import AuthenticationLayout from "page-sections/authentication/AuthenticationLayout";
// import React, { FC } from "react";

// const StyledButton = styled(ButtonBase)(({ theme }) => ({
//   width: "100%",
//   padding: 12,
//   marginBottom: 16,
//   borderRadius: "8px",
//   fontWeight: "500",
//   border: `1px solid ${theme.palette.divider}`,
//   [theme.breakpoints.down(454)]: { width: "100%", marginBottom: 8 },
// }));

// const Login: FC = () => {
//   return (
//     <AuthenticationLayout
//       route="/register"
//       description="New Here?"
//       title="Sign in to Uko"
//       routeName="Create an account"
//     >
//       <form>
//         <Stack gap={2} mt={5}>
//           <AppTextField fullWidth label="Email" />
//           <AppTextField fullWidth label="Password" />
//           <FlexBetween>
//             <FlexBox alignItems="center" gap={1}>
//               <AppCheckBox defaultChecked />
//               <Small fontSize={12}>Remember me</Small>
//             </FlexBox>

//             <Button disableRipple sx={{ color: "error.main", mb: 2 }}>
//               Forget Password
//             </Button>
//           </FlexBetween>

//           <Button variant="contained">Sign In</Button>
//         </Stack>
//       </form>

//       <Divider sx={{ marginTop: 4 }}>
//         <Small color="text.disabled" px={1}>
//           OR
//         </Small>
//       </Divider>

//       <Stack
//         direction="row"
//         justifyContent="space-between"
//         flexWrap="wrap"
//         my={3}
//       >
//         <StyledButton>
//           <GoogleIcon sx={{ marginRight: 1, fontSize: "1.2rem" }} />
//           Signin with Google
//         </StyledButton>

//         <StyledButton>
//           <Facebook
//             sx={{ color: "#2475EF", marginRight: 1, fontSize: "1.2rem" }}
//           />
//           Signin with Facebook
//         </StyledButton>

//         <StyledButton>
//           <Twitter
//             sx={{ color: "#45ABF7", marginRight: 1, fontSize: "1.2rem" }}
//           />
//           Signin with Twitter
//         </StyledButton>
//       </Stack>
//     </AuthenticationLayout>
//   );
// };

// export default Login;
