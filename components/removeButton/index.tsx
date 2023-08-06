"use client"
import { Button, Icon } from "@/components";
import { useTransition } from "react";

const RemoveButton = ({id, removeHandler}: any) => {
    let [isPending, startTransition] = useTransition();
    
    return (
        <Button type="submit" size="XXS" status="fail" variant="outline" content="icon" onClick={() => startTransition(() => removeHandler(id))}>
            <Icon value="close" />
        </Button>
    );
};

export default RemoveButton;
