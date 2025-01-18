/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function DueDateLabel({ dueDate }: { dueDate: string }) {
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    const [formatedDate, setFormatedDate] = useState("");

    useEffect(() => {
        const dateArr = dueDate.split("-");
        const year = dateArr[0];
        const month = months[Number(dateArr[1]) - 1];
        const day = dateArr[2];
        setFormatedDate(`${day} ${month}, ${year}`);
    }, []);

    return <div>{formatedDate}</div>;
}
