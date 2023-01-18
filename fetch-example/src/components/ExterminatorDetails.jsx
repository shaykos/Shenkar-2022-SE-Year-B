
export default function ExterminatorDetails({ FirstName, LastName, LicenseNumber, LicenseType, PermitExpirationDate, Status, settlement, Telephone, rank }) {
    return (
        <>
            <div className="details grid">
                <h1 className="text-center">מידע על  {FirstName} {LastName}</h1>
                <div className="license grid">
                    <p><strong>מספר רשיון: </strong>{LicenseNumber}</p>
                    <p><strong>סוג הרשיון: </strong>{LicenseType}</p>
                    <p><strong>תאריך פקיעת הרשיון: </strong>{PermitExpirationDate}</p>
                    <p><strong>סטטוס רשיון: </strong>{Status}</p>
                </div>
                <div className="grid">
                    <p><strong>יישוב: </strong>{settlement}</p>
                    <p><strong>טלפון: </strong>{Telephone}</p>
                </div>
                <div className="rank">
                    <p><strong>דירוג: </strong>{(rank * 100).toFixed(2)} / 10</p>
                </div>
            </div>
        </>
    )
}
