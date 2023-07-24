export const getSirkelkomponent = (arbeidsgiverFarge: string | undefined) => {
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
