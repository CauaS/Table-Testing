import React from "react";
import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Linhas from "./Linha";
import Footer from "./Footer";
import CheckBox from "./CheckBox";

interface IProps {
  cabecalho: string[];
  data: Array<string[]>;
  usarCheckbox?: boolean;
}

const Tabela: React.FC<IProps> = ({
  data,
  cabecalho,
  usarCheckbox = false
}) => {
  const [allCheck, setAllCheck] = useState(false);

  const handleCheckboxClick = () => {
    setAllCheck((allCheck) => !allCheck);
  };

  const Button = () => <button> Um botão </button>;

  return (
    <table>
      <thead>
        {usarCheckbox ? (
          <Cabecalho
            colunas={cabecalho}
            children={<CheckBox checkOut={allCheck} />}
            handleCheckboxClick={handleCheckboxClick}
          />
        ) : (
          <Cabecalho colunas={cabecalho} />
        )}
      </thead>
      <tbody>
        {usarCheckbox ? (
          <Linhas linhas={data} children={<CheckBox checkOut={allCheck} />} />
        ) : (
          <Linhas linhas={data} />
        )}
      </tbody>
      <tfoot>
        <Footer>
          <Button />
        </Footer>
      </tfoot>
    </table>
  );
};
export default Tabela;
