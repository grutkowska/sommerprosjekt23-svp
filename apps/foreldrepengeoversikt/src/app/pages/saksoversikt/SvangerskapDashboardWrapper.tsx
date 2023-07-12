import './saksoversikt.css';
interface Props {
    svangerskapSak: boolean;
    skjermStørreEnn700: boolean;
    elementA: JSX.Element;
    elementB: JSX.Element;
    elementC: JSX.Element;
    elementD: JSX.Element;
    elementE: JSX.Element;
}

export const SvangerskapDashboardwrapper: React.FC<Props> = ({
    svangerskapSak,
    skjermStørreEnn700,
    elementA,
    elementB,
    elementC,
    elementD,
    elementE,
}) => {
    const elementer = [elementA, elementB, svangerskapSak && elementC, svangerskapSak && elementD, elementE];
    let rekkefølge = skjermStørreEnn700 ? [1, 2, 3, 4, 5] : [1, 2, 4, 5];
    rekkefølge = svangerskapSak ? rekkefølge : [1, 2, 5];

    return (
        <>
            {skjermStørreEnn700 && svangerskapSak ? (
                <div className="dashboardOrganizer">
                    <div className="dasboardSeksjon">
                        {elementer[2]}
                        {elementer[4]}
                    </div>
                    <div className="dasboardSeksjon">
                        {elementer[3]}
                        {elementer[0]}
                        {elementer[1]}
                    </div>
                </div>
            ) : (
                elementer.map((element, index) => {
                    if (index === rekkefølge[index] - 1) {
                        return element;
                    } else return;
                })
            )}
        </>
    );
};
