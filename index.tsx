export async function getServerSideProps() {
    // Gọi API để lấy dữ liệu
    const response = await fetch('');
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}
