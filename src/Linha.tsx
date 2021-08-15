import React from "react";

interface IProps {
  linhas: Array<string[]>;
  children?: React.ReactNode;
}

const Linhas: React.FC<IProps> = ({ linhas, children }) => {
  return (
    <>
      {linhas.map((item, index) => (
        <tr key={index} onClick={() => console.log(item)}>
          {children && <th>{children}</th>}
          {item.map((item2, index2) => (
            <td key={index2}>{item2}</td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default Linhas;
