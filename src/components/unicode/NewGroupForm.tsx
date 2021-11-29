import {Box, Button, Container, Input, Paper, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {CodepointGroup} from "../../types/tsTypes";
import axios from "axios";
import {useAuth} from "../../contexts/authentication";
import {urlBackend} from "../../params/urls";

function postNewGroupToBackend(newGroup: CodepointGroup, token:string) {
    return axios.post(urlBackend+"codepoint-group",newGroup, {headers: {Authorization: `Bearer ${token}`}}) ;
}

export default function NewGroupForm() {
    const [groupName, setGroupName] = useState("")
    const [codepoints, setCodepoints] = useState([])
    let newGroup: CodepointGroup = {name:groupName, codepoints:codepoints};
    // @ts-ignore
    const {token} = useAuth()

    function handleNameChange(e: any) {
        console.log(e.target.value)
        setGroupName(e.target.value)
    }

    function handleCodepointsChange(e: any) {
        setCodepoints(e.target.value.split(" ").map((glyph:string)=>glyph.trim()))

        console.log(e.target.value.split(" ")
            .map((glyph:string)=>glyph.trim())
            .filter((glyph:string)=>glyph!=="")
        )
    }

    return (
        <Container style={{padding: "3px", listStyleType: ""}}>
            <TextField margin="normal" required
                       label="Name"
                       name="name"
                       sx={{width: "100px"}}
                       onInput={handleNameChange}
            />
            <TextField margin="normal" required
                       name="codepoints"
                       label="Codepoints"
                       type="codepoints"
                       onInput={handleCodepointsChange}
                       sx={{width: "1000px"}}
            />
            {/*preview
            <LoadOnScrollHorizontal>
                <Button key="name" variant="contained">
                    <Typography fontSize={"30px"}>
                        {newGroup.name}
                    </Typography>
                </Button>
                {newGroup.codepoints.map(glyph =>
                    <Button key={glyph}>
                        <Typography fontSize="28px">{glyph}</Typography>
                    </Button>
                )}
            </LoadOnScrollHorizontal>
            */}
            <Button
                onClick={()=>{
                    postNewGroupToBackend(newGroup, token).then(
                        ()=>{setGroupName("")
                        setCodepoints([])}
                    )}}
            >
                Submit new Codepoint Group
            </Button>
        </Container>
    );
}