// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import MultipleSelectI, { Selectable } from "./interfaces/MultipleSelectI";
// import { StyledTableCell, StyledTableRow } from "../tables/styled";
// import { Checkbox } from "@mui/material";

// function MultipleSelect<T, S extends Selectable>(props: MultipleSelectI<T, S>) {
//   const {
//     label,
//     name,
//     values = [],
//     onToggle,
//     renderValue,
//     tableHead,
//     valueProp,
//   } = props;

//   const handleCheck = (id: number) => {
//     const item = values.find((i) => i.id == id);
//     if (item)
//       item[valueProp || "checked"] = !item[valueProp || "checked"] as any;
//     onToggle({ name: String(name), value: values });
//   };
//   const renderBody = (v: S) => {
//     let body = renderValue(v);
//     return Array.isArray(body)
//       ? body.map((node, index) => {
//           return (
//             <StyledTableCell component="th" scope="row" key={index}>
//               {node}
//             </StyledTableCell>
//           );
//         })
//       : body;
//   };
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table aria-label="customized table" sx={{ overflow: "scroll" }}>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Select</StyledTableCell>
//               {tableHead ? (
//                 tableHead.map((head, index) => {
//                   return <StyledTableCell key={index}>{head}</StyledTableCell>;
//                 })
//               ) : (
//                 <StyledTableCell>{label}</StyledTableCell>
//               )}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {values.map((v, index) => {
//               return (
//                 <StyledTableRow key={index}>
//                   <StyledTableCell>
//                     <Checkbox
//                       checked={v[valueProp || "checked"] as any}
//                       onChange={() => handleCheck(v.id as number)}
//                     />
//                   </StyledTableCell>
//                   {renderBody(v)}
//                 </StyledTableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default MultipleSelect;
