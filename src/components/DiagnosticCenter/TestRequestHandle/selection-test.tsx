import { ButtonGroup, Button } from "@mui/material";
import ContentSelectedTest from "./content-selected-test";

import DCUserPageAppbar from "../HompageConstruction/dc-user-page-appbar";
import SetTestInfo from "./set-test-info";

export default function SelectionTest(){
    return (
        <>
        <DCUserPageAppbar/>
        <ContentSelectedTest/>
        <SetTestInfo/>
        </>
    );
}