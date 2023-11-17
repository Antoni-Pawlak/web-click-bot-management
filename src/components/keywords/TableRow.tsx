import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"

import Badge from "../Badge"
import Button from "../button/Button"

import { toast } from 'react-hot-toast'

interface TableRowProps{
    bgColor: string
    id?: number
    keyword?: string
    img?: string
    link?: string
    amount?: string
    last_login?: string
    onEdit: ()=> void
    onDelete: ()=> void
}

const TableRow:React.FC<TableRowProps> = ({bgColor, id, keyword, link, amount, last_login, onEdit, onDelete}) => {
    const date = last_login?.split("/")[0]
    const time = last_login?.split("/")[1]

    
    return (
        <tr className={`${bgColor}`}>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-gray-900 font-medium whitespace-no-wrap">
                            {keyword}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <p className="text-gray-900 font-medium whitespace-no-wrap">
                    {link}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <p className="text-gray-400 font-medium whitespace-no-wrap">{amount}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
                <p className="text-gray-900 font-[430] whitespace-no-wrap">{date}</p>
                <p className="text-gray-500 whitespace-no-wrap">{time}</p>
            </td>
            <td className="p-5 border-b border-gray-200 bg-transparent text-sm" >
                {/* button component */}
                <div className="flex justify-between">
                    <Button icon={RiDeleteBin6Line} classes="bg-slate-100 hover:bg-slate-200 transition rounded-full p-3" color="rgb(107 114 128)" onClick={()=> onDelete()} />
                    <Button icon={FiEdit2} color="rgb(107 114 128)" classes="bg-slate-100 hover:bg-slate-200 transition rounded-full p-3" onClick={()=> onEdit()} />
                </div>
            </td>
        </tr>
    )
}

export default TableRow;