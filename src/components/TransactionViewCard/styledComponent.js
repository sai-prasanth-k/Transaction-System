import styled from "styled-components";

export const TransactionViewCardContainer = styled.div`
   width: 1000px;
   height: 450px;
   overflow-y: auto;
   border: 1px solid #000;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 20px;
   padding: 40px;
`;

export const TransactionTableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TransactionRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px; solid #000;
  
`;