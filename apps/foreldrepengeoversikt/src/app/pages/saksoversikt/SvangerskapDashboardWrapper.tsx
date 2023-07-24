import './saksoversikt.css';
interface Props {
    svangerskapSak: boolean;
    skjermStørreEnn800: boolean;
    componentA: JSX.Element;
    componentB: JSX.Element;
    componentC: JSX.Element;
    componentD: JSX.Element;
    componentE: JSX.Element;
    componentF: JSX.Element;
}

export const SvangerskapDashboardwrapper: React.FC<Props> = ({
    svangerskapSak,
    skjermStørreEnn800,
    componentA,
    componentB,
    componentC,
    componentD,
    componentE,
    componentF,
}) => {
    const komponenter =
        skjermStørreEnn800 && svangerskapSak
            ? [
                  svangerskapSak && componentC,
                  svangerskapSak && componentD,
                  componentE,
                  componentA,
                  componentB,
                  componentF,
              ]
            : [
                  componentA,
                  componentB,
                  svangerskapSak && componentC,
                  svangerskapSak && componentD,
                  componentE,
                  componentF,
              ];

    return (
        <>
            {skjermStørreEnn800 && svangerskapSak ? (
                <div className="dashboard">
                    <div style={{ minWidth: '100%' }}>
                        <h2>Dine Svangerskapspenger</h2>
                    </div>
                    <div className="dashboardMain">
                        <div className="dasboardSeksjon" style={{ width: '100%' }}>
                            {komponenter[1]}
                            {komponenter[3]}
                            {komponenter[4]}
                        </div>
                        <div className="dasboardSeksjon" style={{ maxWidth: '360px' }}>
                            {komponenter[0]}
                            {komponenter[2]}
                            {komponenter[5]}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {komponenter[0]}
                    {komponenter[1]}
                    {komponenter[2]}
                    {komponenter[3]}
                    {komponenter[4]}
                    {komponenter[5]}
                </>
            )}
        </>
    );
};
