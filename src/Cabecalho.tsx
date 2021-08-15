import React from "react";

interface IProps {
  colunas: string[];
  children?: React.ReactNode;
  handleCheckboxClick?: () => void | undefined;
}

const Cabecalho: React.FC<IProps> = ({
  colunas,
  children,
  handleCheckboxClick
}) => {
  return (
    <tr onClick={handleCheckboxClick}>
      {children && <th>{children}</th>}
      {colunas.map((item, index) => (
        <th key={index}>{item}</th>
      ))}
    </tr>
  );
};

export default Cabecalho;
