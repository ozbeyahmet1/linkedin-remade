import * as React from "react";
import InputUnstyled from "@mui/core/InputUnstyled";
import { styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
const StyledInputElement = styled("input")(`

  font-size: 12px;
  font-weight: 400;
  line-height: 1.4375em;
  border: 1px solid #E5E8EC;
  border-radius: 5px;
  padding: 10px 10px;
  color: #20262D;
  transition: width 300ms ease;

  &:hover {
    background: #EAEEF3;
    border-color: #E5E8EC;
  }
 


`);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
  
    />
  );
});

export default function UnstyledInput() {
  return (
    
    <CustomInput aria-label="Demo input" placeholder= "Search"     className='searchBar' />
  );
}
