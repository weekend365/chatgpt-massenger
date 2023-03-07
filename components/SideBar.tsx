import NewChat from "./NewChat";

function SideBar() {
  return (
    <div
      className="p-2 flex flex-col h-scre
  "
    >
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModalSelection */}</div>
          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
