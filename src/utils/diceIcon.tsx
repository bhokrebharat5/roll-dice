export function iconHtml (value: number) {
        switch (value) {
            case 1:
                return (
                    <div className="flex justify-center align-center gap-1 w-full h-full p-2">
                        <div className="flex items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="flex justify-between gap-1 w-full h-full p-2">
                        <div className="flex self-start items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                        <div className="flex self-end">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="flex justify-between gap-1 w-full h-full p-2">
                        <div className="flex self-start items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                        <div className="flex self-center items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                        <div className="flex self-end items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="flex justify-between gap-1 w-full h-full p-2">
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex self-start items-start justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-start items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex self-end items-start justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-end items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="flex justify-between gap-1 w-full h-full p-2">
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex self-start items-start justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-start items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 justify-center">
                            <div className="flex self-start items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex self-end items-start justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-end items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="flex justify-between gap-1 w-full h-full p-2">
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex self-start items-start justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-start items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-start items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex self-end items-start justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-end items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="flex self-end items-end justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return '?';
        }
    };