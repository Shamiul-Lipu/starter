
const RoleDetails = () => {
    return (
        <>
            <div className="flex gap-2 py-2">
                <div className="avatar online">
                    <div className="w-24 rounded-xl">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h5>User name</h5>
                    <h6>user@email.com</h6>
                    <h6>user role</h6>
                </div>
            </div>
        </>
    );
};

export default RoleDetails;