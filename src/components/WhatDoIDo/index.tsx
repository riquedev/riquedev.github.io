import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import {CheckIcon} from '@chakra-ui/icons';
import Translator from "../i18n/Translator";

// Replace test data with your own
const skills = ["django", "python", "php","godot",'javascript','nodejs','reactjs','nextjs','radstudio',"kotlin","paper"]

const features = skills.map((element, index) => {
    const pathText = `home.skills.${element}.text`;
    const pathTitle = `home.skills.${element}.title`;

    return {
        id: index,
        title: <Translator path={pathTitle}/>,
        text: <Translator path={pathText}/>
    }
})

export default function WhatDoIDo() {
    return (
        <Box p={4} py={{base: 5, md: 13}}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}><Translator path={"home.whatDoIDo"}/></Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    <Translator path={"home.whatDoIDoDesc"}/>
                </Text>
            </Stack>
            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon}/>
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
