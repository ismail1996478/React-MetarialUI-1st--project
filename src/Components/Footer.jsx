import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

function Footer() {
  const FooterData = [
    {
      Title: "Home",
      links: ["Become Affiliate", "Go Unlimited", "Services"],
    },
    {
      Title: "Product",
      links: ["Become Affiliate", "Go Unlimited", "Services", "Blog"],
    },
    {
      Title: "Legals",
      links: ["Privacy Policy", "Terms of Service", "Licenses"],
    },
    {
      Title: "Blog",
      links: ["Latest Posts", "Case Studies", "Guides", "News"],
    },
  ];

  const SocialIcons = [
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Instagram />, href: "#" },
  ];

  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <img src="Images/degic 1.png" alt="Logo" style={{ maxWidth: "100%" }} />
          </Grid>

          {FooterData.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography variant="h6" gutterBottom>
                {section.Title}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <Box key={linkIndex}>
                  <Link
                    href="#"
                    underline="none"
                    color="inherit"
                    display="block"
                    sx={{ my: 1 }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            {SocialIcons.map((item, index) => (
              <IconButton
                key={index}
                href={item.href}
                sx={{ color: "#fff", mr: 1 }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Grid>
        </Grid>
        <hr className="mt-10 mb-2 text-[#C4C4C4]" />
        <Box display='flex' justifyContent='center'>
            {
              SocialIcons.map((social, index)=>(
                <IconButton key={index} color="inherit">
                  {social.icon}
                </IconButton>
              ))
            }
        </Box>

        <Box mt={4} textAlign='center'>
            <Typography>
              © {new Date().getFullYear()} Copyright Degic All Rights Reserved
            </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
