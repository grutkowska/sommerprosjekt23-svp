interface arbeidsgiverFargeProps {
    arbeidsgiverFarge: string | undefined;
}

export const ArbeidsgiverSirkelkomponent: React.FC<arbeidsgiverFargeProps> = ({ arbeidsgiverFarge }) => {
    return (
        <div
            style={{
                backgroundColor: `${arbeidsgiverFarge}`,
                borderRadius: '50%',
                width: '12px',
                height: '12px',
                alignSelf: 'center',
            }}
        ></div>
    );
};
