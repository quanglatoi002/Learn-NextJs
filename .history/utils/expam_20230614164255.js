function TabContainer() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }
    // ...
}
