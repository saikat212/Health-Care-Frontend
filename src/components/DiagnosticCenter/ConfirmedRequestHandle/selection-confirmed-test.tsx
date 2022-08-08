import { ButtonGroup, Button } from "@mui/material";
import ContentConfirmedSelectedTest from "./content-selected-confirmed-test";

import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";
import SetConfirmedTestInfo from "./set-confirmed-test-info";

export default function SelectionConfirmedTest(){
    return (
        <>
        <DCUserPageAppbar/>
        <ContentConfirmedSelectedTest/>
        <SetConfirmedTestInfo/>
        </>
    );
}