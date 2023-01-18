
export default function ExterminatorDetails({ FirstName, LastName, LicenseNumber, LicenseType, PermitExpirationDate, Status, settlement, Telephone, rank }) {
    return (
        <>
            <h1>מידע על  {FirstName} {LastName}</h1>
            <div className="Details">
                <div className="license">
                    <p>מספר רשיון: {LicenseNumber}</p>
                    <p>סוג הרשיון: {LicenseType}</p>
                    <p>תאריך פקיעת הרשיון: {PermitExpirationDate}</p>
                    <p>סטטוס רשיון: {Status}</p>
                </div>
                <div className="">
                    <p>יישוב: {settlement}</p>
                    <p>טלפון: {Telephone}</p>
                </div>
                <div className="rank">
                    <p>דירוג: {(rank * 100).toFixed(2)} / 10</p>
                </div>
            </div>
        </>
    )
}
