import React from "react";
import { Container } from "./styles";

export function Button({ isDelete = false, title, icon, loading = false, ...rest }) {
  return (
    <Container isdelete={isDelete.toString()} type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : (
        <div className="content">
          {icon && <span className="icon">{icon}</span>}
          {title}
        </div>
      )}
    </Container>
  );
}
