interface arbeidsgiverFargeProps {
    arbeidsgiverFarge: string | undefined;
}

export const ArbeidsgiverSirkelkomponent: React.FC<arbeidsgiverFargeProps> = ({ arbeidsgiverFarge }) => {
    return (
        <div
            style={{
                backgroundColor: `${arbeidsgiverFarge}`,
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                alignSelf: 'center',
            }}
        ></div>
    );
};
