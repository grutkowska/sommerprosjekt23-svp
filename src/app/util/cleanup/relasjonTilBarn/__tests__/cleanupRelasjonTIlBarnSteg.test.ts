import cleanupRelasjonTilBarnFødselSteg from '../cleanupRelasjonTilBarnFødselSteg';
import { Barn } from '../../../../types/søknad/Barn';

let dirtyBarn: Partial<Barn>;
describe('cleanupRelasjonTIlBarnFødselSteg', () => {
    beforeEach(() => {
        dirtyBarn = {
            antallBarn: 1,
            erBarnetFødt: true,
            termindato: new Date(),
            terminbekreftelse: [],
            terminbekreftelseDato: new Date(),
            fødselsattest: new File([''], 'filename.pdf'),
            fødselsdatoer: [new Date()]
        };
    });

    it('should remove irrelevant properties when child is born', () => {
        dirtyBarn.erBarnetFødt = true;
        const cleanedFødtBarn = cleanupRelasjonTilBarnFødselSteg(dirtyBarn) as any;
        expect(cleanedFødtBarn.terminbekreftelse).toBeUndefined();
        expect(cleanedFødtBarn.terminbekreftelseDato).toBeUndefined();
    });

    it('should remove redundant properties when child is unborn', () => {
        dirtyBarn.erBarnetFødt = false;
        const cleanedUfødtBarn = cleanupRelasjonTilBarnFødselSteg(dirtyBarn) as any;
        expect(cleanedUfødtBarn.fødselsdatoer).toBeUndefined();
        expect(cleanedUfødtBarn.fødselsattest).toBeUndefined();
    });
});
