import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@heroui/react";
import PropTypes from "prop-types";
import { withAlert } from "../hoc/withAlert";
import { withBackground } from "../hoc/withBackground";
import { FC } from "react";

// type ToDoCardProps = {
//   day: string;
//   numberOfActivities: number;
//   list1: string;
//   list2: string;
//   list3: string;
// };

const ToDoCard = (props) => {
    return(
        <Card className="max-w-[400px]">
            <CardHeader className="font-bold text-lg font-sans">{props.day} ({props.numberOfActivities})</CardHeader>
            <Divider />
            <CardBody>
                <ul className="list-decimal list-inside">
                    <li>{props.list1}</li>
                    <li>{props.list2}</li>
                    <li>{props.propsTambahan}</li>
                </ul>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button className="text-sm bg-slate-400">Finish</Button>
            </CardFooter>
        </Card>
    );
};


ToDoCard.propTypes = {
    day: PropTypes.string,
    numberOfActivities: PropTypes.number,
    list1: PropTypes.string.isRequired,
    list2: PropTypes.string.isRequired,
    list3: PropTypes.string.isRequired
};


export default withBackground(withAlert(ToDoCard));