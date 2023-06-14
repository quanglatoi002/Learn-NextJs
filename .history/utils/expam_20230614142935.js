const MyComponent = () => {
    const router = useRouter();

    // Truy cập thông tin về route
    console.log(router.pathname); // Đường dẫn hiện tại
    console.log(router.query); // Query parameters
    console.log(router.route); // Route hiện tại
    console.log(router.asPath); // Đường dẫn hiện tại (bao gồm các query parameters)

    // Điều hướng đến một route khác
    const handleNavigate = () => {
        router.push('/other-route');
    };

    return (
        <div>
            {/* JSX của component */}
            <button onClick={handleNavigate}>Navigate</button>
        </div>
    );
};
