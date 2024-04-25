import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Income</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((item, index) => (
                    <tr key={index}>
                        <td>{item.brand}</td>
                        <td>{item.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    netIncomes: PropTypes.array,
};

export default Table;
