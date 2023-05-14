import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick} >
      <Breadcrumbs aaria-label="breadcrumb"
      sx={{
        "& ol": {
          justifyContent: "center",
          margin: "auto"
        }
      }}>
       
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Precios
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Pricing
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Afiliados
        </Link>
      
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Comunidad
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Afiliados
        </Link>
      
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Comunidad
        </Link>
      </Breadcrumbs>
     </div>
  );
}