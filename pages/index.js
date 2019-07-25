import React from "react";

import {Card, Classes, H5, Button} from "@blueprintjs/core";
import {Flex, Box} from "@rebass/grid";
import ProgressSpinner from "../component/page-spinner";
import dynamic from 'next/dynamic';

const Skeleton = dynamic(() => import('../component/Skeleton'), {
    ssr: false,
    loading: () => <ProgressSpinner/>
});


const Index = (props) => {
    return (
        <Skeleton>
            <Flex>
                <Box p={2} width={1 / 4}>
                    <Card>
                        <H5>
                            <a href="#">Analytical applications</a>
                        </H5>
                        <p>
                            User interfaces that enable people to interact smoothly with
                            data, ask better questions, and make better decisions.
                        </p>
                        <Button
                            text="Explore products"
                            className={Classes.INTENT_PRIMARY}
                        />
                    </Card>
                </Box>
                <Box p={2} width={3 / 4}>
                    Half width
                </Box>
            </Flex>

        </Skeleton>
    );
};

Index.getInitialProps = async ({req}) => {
    return {};
};

export default Index;
