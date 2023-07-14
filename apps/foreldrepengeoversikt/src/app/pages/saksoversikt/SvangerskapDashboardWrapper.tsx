import './saksoversikt.css';
interface Props {
    svangerskapSak: boolean;
    skjermStørreEnn800: boolean;
    componentA: JSX.Element;
    componentB: JSX.Element;
    componentC: JSX.Element;
    componentD: JSX.Element;
    componentE: JSX.Element;
}

export const SvangerskapDashboardwrapper: React.FC<Props> = ({
    svangerskapSak,
    skjermStørreEnn800,
    componentA,
    componentB,
    componentC,
    componentD,
    componentE,
}) => {
    const komponenter = skjermStørreEnn800
        ? [svangerskapSak && componentC, svangerskapSak && componentD, componentE, componentA, componentB]
        : [componentA, componentB, svangerskapSak && componentC, svangerskapSak && componentD, componentE];

    return (
        <>
            {skjermStørreEnn800 ? (
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
                        </div>
                    </div>
                </div>
            ) : (
                komponenter.map((element) => {
                    return element;
                })
            )}
        </>
    );
};
