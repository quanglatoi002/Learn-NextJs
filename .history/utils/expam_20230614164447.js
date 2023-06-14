function TabContainer() {
    //isPending cho biết liệu có quá trình chuyển đổi đang chờ xử lý hay ko.
    //startTransition cho phép bạn đánh dấu 1 cập nhật trạng thái là 1 quá trình chuyển đổi
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }
    // ...
}
