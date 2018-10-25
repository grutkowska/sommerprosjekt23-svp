import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import ApplicationSpinner from 'common/components/application-spinner/ApplicationSpinner';
import Applikasjonsside from '../../connected-components/sider/Applikasjonsside';
import DocumentTitle from 'react-document-title';
import getMessage from 'common/util/i18nUtils';

interface OwnProps {}

type Props = OwnProps & InjectedIntlProps;

const LoadingScreen: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <Applikasjonsside>
            <DocumentTitle title={getMessage(props.intl, 'dokument.tittel.loadingScreen')} />
            <ApplicationSpinner />
        </Applikasjonsside>
    );
};

export default injectIntl(LoadingScreen);
