import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  Textarea,
  Button,
  ButtonGroup,
  Stack,
<<<<<<< HEAD
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Response from './Response.jsx';
import { Controlled as CodeMirror } from 'react-codemirror2';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/neo.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closebrackets';
=======
} from "@chakra-ui/react";
import Response from "./Response.jsx";
import Schema from "./Schema.jsx";
>>>>>>> main

function SubmitQuery({ urlValue }) {
  // react hooks to hold query in state
  let [query, setQuery] = useState("");
  /// react hooks to hold fetch response in state
  let [fetchResponse, setFetchResponse] = useState("");

  // handle query text input change
  const handleQueryChange = (e) => {
    let inputValue = e.target.value;
    setQuery(inputValue);
  };

  // function to query request and send response back
  const getQueryResponse = () => {
    // execute a fetch request
    fetch(`${urlValue}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((res) => res.json())
      // .then((res) => JSON.stringify(res))
      .then((res) => setFetchResponse(res))
      .catch((error) => console.log(error));
  };

  return (
    <Grid h="100%" border="1px" borderColor="gray.200" autoFlow="column dense">
      <GridItem bg="#F7FAFC" colSpan={1}>
        <Tabs variant="enclosed" colorScheme="pink">
          <TabList>
            <Tab>Submit Query</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack direction={'column'}>
                <CodeMirror
                  value={query}
                  options={{
                    autoCloseBrackets: true,
                    tabSize: 2,
                    mode: 'javascript',
                    theme: 'neo',
                    lineNumbers: true,
                  }}
                  onBeforeChange={(editor, data, value) => {
                    setQuery(value);
                  }}
                  onChange={(editor, data, value) => {}}
                />
                <Button colorScheme="pink" size="sm" onClick={getQueryResponse}>
                  Submit
                </Button>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
      <GridItem bg="#EDF2F7" colSpan={1}>
        <Response
          urlValue={urlValue}
          query={query}
          fetchResponse={fetchResponse}
        />
      </GridItem>
      <GridItem bg="#E2E8F0" colSpan={2}>
        <Schema />
      </GridItem>
    </Grid>
  );
}

export default SubmitQuery;

// try {
//   const queryResponse = await fetch(`${urlValue}`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ query: query }),
//   })
//     .then((res) => res.json())
//     .then((res) => console.log('fetch response', res));
// } catch (error) {
//   console.log('fetch error', error);
// }
