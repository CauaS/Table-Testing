import Tabela from "./Tabela";
interface Props {}

const Listagem = (props: Props) => {
  let headers = ["Casa", "Bairro"];
  let rows = [
    ["Verde", "Centro"],
    ["Azul", "Uniao"]
  ];

  return <Tabela cabecalho={headers} data={rows} usarCheckbox={true} />;
};
export default Listagem;
