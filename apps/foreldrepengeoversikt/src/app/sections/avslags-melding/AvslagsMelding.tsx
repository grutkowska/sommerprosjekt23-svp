import { Alert, Heading } from '@navikt/ds-react';

interface props {
    children: JSX.Element;
}

export const AvslagsMelding: React.FC<props> = ({ children }) => {
    return (
        <>
            <Heading level="1" size="large" spacing>
                Din søknad er avslått
            </Heading>
            <Alert variant="info">{children}</Alert>
        </>
    );
};
