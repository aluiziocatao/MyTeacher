import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import {
  FotoStyled,
  ItemListaStyled,
  ListaStyled,
  InformacoesStyled,
  NomeStyled,
  ValorStyled,
  DesricaoStyled,
  ListaVaziaStyled,
} from "./ListaProfessores.style";

interface ListaProfessoresProps {
  professores: Professor[];
}

const ListaProfessores = (props: ListaProfessoresProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemListaStyled key={professor.id}>
              <FotoStyled src={professor.foto}></FotoStyled>
              <InformacoesStyled>
                <NomeStyled>{professor.nome}</NomeStyled>
                <ValorStyled>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</ValorStyled>
                <DesricaoStyled>{professor.descricao}</DesricaoStyled>
                <Button sx={{ width: "70%" }}>
                  Marcar Aula com {professor.nome}
                </Button>
              </InformacoesStyled>
            </ItemListaStyled>
          ))}
        </ListaStyled>
      ): (
        <ListaVaziaStyled>Nenhum item encontrado</ListaVaziaStyled>
      )}
    </div>
  );
};

export default ListaProfessores;
