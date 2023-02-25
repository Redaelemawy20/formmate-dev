// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
// import MuiAccordionSummary, {
//   AccordionSummaryProps,
// } from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { Alert, Fab, TextField, Tooltip } from "@mui/material";
// import Input from "./Input";
// import { Stack } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import AccordionI, { HasTitleAndValue } from "./interfaces/AccordionI";

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

// export default function CustomizedAccordions<T extends HasTitleAndValue>({
//   childFucion,
//   value,
//   onChange,
//   name,
//   error,
//   onValidate,
// }: AccordionI<T>) {
//   const [expanded, setExpanded] = React.useState<number | false>(false);

//   const handleChange = (
//     id: number,
//     { name: inputName, value: inputValue }: { name: string; value: string }
//   ) => {
//     const cloned = [...value];
//     const item = cloned[id];
//     item[inputName as "title" | "value"] = inputValue;
//     onChange({ name, value: cloned });
//     onValidate && onValidate({ name, value: cloned });
//   };
//   const toggleExpansion =
//     (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//       setExpanded(newExpanded ? panel : false);
//     };

//   return (
//     <div>
//       <Tooltip
//         title="Add"
//         onClick={() => {
//           const v = [...value];
//           v.push({ value: "", title: "" } as T);
//           onChange({ name, value: v });
//           onValidate && onValidate({ name, value: v });
//         }}
//       >
//         <Fab size="small" color="secondary" sx={{ marginBottom: 2 }}>
//           <AddIcon />
//         </Fab>
//       </Tooltip>
//       {value.map((item, index) => {
//         return (
//           <Accordion
//             expanded={expanded === index}
//             onChange={toggleExpansion(index)}
//             key={index}
//           >
//             <AccordionSummary
//               aria-controls="panel1d-content"
//               id="panel1d-header"
//             >
//               <Typography>{item.title}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Stack direction={"column"}>
//                 <Input
//                   label="title"
//                   name="title"
//                   onChange={(target) => {
//                     handleChange(index, target);
//                   }}
//                   value={item.title}
//                 />
//                 {childFucion({
//                   label: "",
//                   name: "value",
//                   onChange: (target) => {
//                     handleChange(index, target);
//                   },
//                   value: item.value,
//                 })}
//                 {/* <TextArea
//                   label="text"
//                   name="text"
//                   onChange={(target) => {
//                     onChange(index, target);
//                   }}
//                   value={value.text}
//                   rows={4}
//                 /> */}
//               </Stack>
//             </AccordionDetails>
//           </Accordion>
//         );
//       })}
//       {error && <Alert severity="error">{error}</Alert>}
//     </div>
//   );
// }
