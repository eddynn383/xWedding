import sx from "@/styles/component.module.scss";
import { Header, Table } from "@/components";

export default function Home() {
    return (
        <>
            <Header title="Restaurant" description="Choose a table to see more details" />
            <div className={sx["body"]} >
                <div className={sx["tables"]}>
                    <div className={sx["tables-left"]} >
                        <Table id="tsetasdfasdf" number={7} />
                        <Table id="345dgasdfasdf" number={8}/>
                        <Table id="df234sahasdfas" number={9}/>
                        <Table id="asf2332safafas" number={10}/>
                    </div>
                    <div className={sx["tables-right"]} >
                        <Table id="asdffasdfffsdfs" number={2}/>
                        <Table id="asdfasdfh334fas" number={3}/>
                        <Table id="756hdfghdfghsgd" number={4}/>
                        <Table id="078943htfdfghhd" number={5}/>
                        <Table id="567dfh43hteerth" number={6}/>
                    </div>
                </div>
            </div>
        </>
    ) 
}
