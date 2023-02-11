import React, { useEffect, useState } from 'react'
import style from "./PostWriter.module.css"
import {Button, useDisclosure,Box,Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Checkbox, Stack, ModalFooter, Flex, Spacer,CircularProgressLabel,CircularProgress, Textarea, ButtonGroup } from "@chakra-ui/react"
import { myAction } from '../Redux/Action'
import {useDispatch} from "react-redux"




const PostWriter = () => {
    const [content, setContent] = useState({
           
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCnKVdb6r65QZHqRYFJ8Bo_LK2_RmQH1quU0kEoKJEqxkHgJP53wS6tFUqAZD-0CY2GU&usqp=CAU",
            username: "Guest_986",
            description: "",
            people: "Guest_986",
            peoplePost: [
              {}
            ],
            image: "",
            video: "",
            Tag1: "",
            Tag2: "",
            Likes: 0,
            Comments: 0,
            category: "",
    })
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [text, changetext] = useState("");
    const [lang, setLang] = useState(["English"]);
    const [charCount, setcharCount] = useState(0);
    

    async function addDataJson(){
        console.log(content);
        let data = await fetch("http://localhost:3004/Feeds", {
            method:"POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(content),
        })
        let fetchedData = await data.json();
        console.log(fetchedData);
        closeWriter();
    }

    function langCheck(){
     let eng = document.getElementById("English");
     let hin = document.getElementById("हिन्दी");
     let kan = document.getElementById("ಕನ್ನಡ");
     let tam = document.getElementById("தமிழ்");
     let tel = document.getElementById("తెలుగు");
     let mar = document.getElementById("मराठी");
     let ben = document.getElementById("বাংলা");
     
     let langArr =[eng,hin,kan,tam,tel,mar,ben];
     let newarr=[];
     langArr.map((elem)=>{
       if(elem.checked){
          newarr.push(elem.value);
        setLang([...newarr]);
       }
     })

     onClose();
    }

    async function translateFunc(targetlang){
        // console.log(targetlang);
        // console.log(text);
        try{
        let inp= text;
        let sourcelang ="en";
        let targetLang=targetlang ;
        const res = await fetch(`https://libretranslate.de/translate`, {
        method: "POST",
        body: JSON.stringify({
		q: inp,
		source: sourcelang,
		target: targetLang,
		format: "text",
	    }),
	headers: { "Content-Type": "application/json" }
});

const data = await res.json();
setContent({...content, description:data.translatedText});
console.log(content)
document.getElementById("feedbox").value=data.translatedText;

        }
        catch(error){
            console.log("error");
        }
      
    }

    function countCharacter(){
        let post=text.length;
        setcharCount(post);
    }

    useEffect(()=>{
        countCharacter();
    })

let dispatch= useDispatch();
    const closeWriter=()=>{
        myAction(dispatch,false);
    }

console.log(text)

  return (

    <Box px="20%" py="4.3%"  bg="#E8E8E3">
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Select Languages</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={1}>
                <Checkbox defaultChecked id='English' value={"English"}><pre>English              English</pre></Checkbox><br />
                <Checkbox id='हिन्दी' value={"हिन्दी"}><pre>हिन्दी                  Hindi</pre></Checkbox><br />
                <Checkbox id='ಕನ್ನಡ' value={"ಕನ್ನಡ"}><pre>ಕನ್ನಡ                Kannada</pre></Checkbox><br />
                <Checkbox id='தமிழ்' value={"தமிழ்"}><pre>தமிழ்                Tamil</pre></Checkbox><br />
                <Checkbox id='తెలుగు' value={"తెలుగు"}><pre>తెలుగు               Telegu</pre></Checkbox><br />
                <Checkbox id='मराठी' value={"मराठी"}><pre>मराठी                 Marathi</pre></Checkbox><br />
                <Checkbox id='বাংলা' value={"বাংলা"}><pre>বাংলা                 Bengali</pre></Checkbox><br />
                </Stack>
            </ModalBody>

            <ModalFooter>
                <Button  px={200} colorScheme='blue' mr={1} onClick={langCheck}  >
                Done
                </Button>
               
            </ModalFooter>
            </ModalContent>
        </Modal>

        <Box  bg="#fff"  borderRadius={20} background="#F8F7F3">
            <Flex  mx={8} pt={5} alignItems="center">
                <Flex gap={5}>
                    <i onClick={closeWriter} class="fa-solid fa-arrow-left-long fa-lg"></i>
                    <i id="style.fa-solid" class="fa-solid fa-user fa-lg"></i>
                </Flex>
                <Spacer/>
                <Button onClick={addDataJson} size={"sm"} bg="#809B9D" color={"white"}> <pre><i class="fa-regular fa-paper-plane"></i> Post</pre> </Button>
            </Flex>

            <Flex alignItems="center" gap={5} mx={8} mt={4} >
            <Button colorScheme={"white"} color={"black"} size={"xs"} onClick={onOpen}><i class="fa-solid fa-plus"></i></Button> 
                {
                 lang.map((elem,id)=>{
                    return <Button onClick={(e)=>{translateFunc(e.target.value)}}   key={id+1} value={id==0 ? "en": "hi"} borderRadius={50} size="sm">{elem}</Button>
                 })   
                }
                
            </Flex>
            
            <Textarea _focusVisible={false} id="feedbox" maxLength={500} onChange={(e)=>{setContent({...content, description: e.target.value}); changetext(e.target.value);  }} mt={3} size="md" bg={"#fff"}  borderTopRadius="10" borderBottomRadius={0} resize={'none'} rows="15"  placeholder="What's on your mind?" />

            <Flex alignItems="center" mt={4} mx="5" pb={3}  >
                <Flex gap={5}>
                    <i class="fa-regular fa-images"></i>
                    <i class="fa-solid fa-play"></i>
                    <i class="fa-solid fa-link"></i>
                    <i class="fa-solid fa-square-poll-vertical"></i>
                </Flex>

                <Spacer/>
                <Flex alignItems="center" gap={2}>
                    <Box><i class="fa-solid fa-gear"></i></Box>
                    |
                    <Box>
                    <CircularProgress max={500} value={charCount} size="30px" color='green'>
                    <CircularProgressLabel>{charCount}</CircularProgressLabel>
                    </CircularProgress>
                    </Box>
                </Flex>
                
            </Flex>
        </Box>

       
        
      
    </Box>
  )
}

export default PostWriter
