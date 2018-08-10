import * as React from 'react';
import {
    getTerminbekreftelsedatoAvgrensninger,
    getTerminbekreftelseDatoRegler
} from '../../../../util/validation/fields/terminbekreftelsedato';
import søknadActions from '../../../../redux/actions/søknad/søknadActionCreators';
import { AttachmentType } from '../../../../types/søknad/Søknad';
import { UfødtBarn } from '../../../../types/søknad/Barn';
import { Attachment } from 'common/storage/attachment/types/Attachment';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getMessage from 'common/util/i18nUtils';
import AttachmentsUploaderPure from 'common/storage/attachment/components/AttachmentUploaderPure';
import { DispatchProps } from 'common/redux/types';
import DatoInput from 'common/components/skjema/wrappers/DatoInput';
import Block from 'common/components/block/Block';

export interface OwnProps {
    barn: UfødtBarn;
    terminbekreftelse: Attachment[];
}

export type Props = OwnProps & InjectedIntlProps & DispatchProps;

const Terminbekreftelse: React.StatelessComponent<Props> = (props) => {
    const { terminbekreftelse, barn, intl, dispatch } = props;
    return (
        <React.Fragment>
            <Block
                visible={props.barn.termindato !== undefined}
                title={getMessage(intl, 'vedlegg.tittel.terminbekreftelse')}
                render={() => (
                    <AttachmentsUploaderPure
                        attachments={terminbekreftelse}
                        attachmentType={AttachmentType.TERMINBEKREFTELSE}
                        onFilesSelect={(attachments: Attachment[]) => {
                            attachments.forEach((attachment: Attachment) => {
                                dispatch(
                                    søknadActions.uploadAttachment(attachment)
                                );
                            });
                        }}
                        onFileDelete={(attachment: Attachment) =>
                            dispatch(søknadActions.deleteAttachment(attachment))
                        }
                    />
                )}
            />
            <Block
                visible={
                    terminbekreftelse.length > 0 &&
                    barn.termindato !== undefined
                }
                render={() => (
                    <DatoInput
                        id="terminbekreftelseDato"
                        name="terminbekreftelseDato"
                        label={getMessage(
                            intl,
                            'terminbekreftelseDato.spørsmål'
                        )}
                        onChange={(terminbekreftelseDato: Date) => {
                            dispatch(
                                søknadActions.updateBarn({
                                    terminbekreftelseDato
                                })
                            );
                        }}
                        dato={barn.terminbekreftelseDato}
                        avgrensninger={getTerminbekreftelsedatoAvgrensninger(
                            barn.termindato
                        )}
                        validators={getTerminbekreftelseDatoRegler(
                            barn.terminbekreftelseDato,
                            barn.termindato,
                            intl
                        )}
                        infotekst={getMessage(
                            intl,
                            'terminbekreftelseDato.infotekst'
                        )}
                    />
                )}
            />
        </React.Fragment>
    );
};

export default injectIntl(Terminbekreftelse);
