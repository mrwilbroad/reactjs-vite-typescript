import FullList from "../model/FullList";
import React, { useEffect, useState } from "react";
import Listitem from "../model/Listitem";
import { STORAGE_NAME } from "../model/FullList";
import type { ItemListType } from "../model/FullList";

type domprops = {
  fullist: FullList;
  onRemoveItem: (id: string) => void;
  onAddItem: (itemoj: Listitem) => void;
  onClearList: () => void;
  buttontitle?: string;
};

const DomList = ({
  fullist,
  buttontitle,
  onRemoveItem,
  onClearList,
  onAddItem,
}: domprops): React.JSX.Element => {
  const [item, setItem] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {});

  const AddItem = (): void => {
    setMessage("");
    if (!item) {
      setMessage("You can't add empty item to list");
      return;
    }
    fullist.PushItem(
      new Listitem(
        (Math.floor(Math.random() * 1000) + 1).toString(),
        item,
        true
      )
    );
    setItem("");
  };

  return (
    <div className="container">
      <section className="mt-3">
        <button type="button" className="btn w-100 border btn-dark ">
          {" "}
          <p className="my-auto">Add/Remove/clear List</p>
        </button>

        <section className="vstack gap-4 mt-3">
          <section className="col-12">
            <section className="input-group">
              <input
                type="search"
                name="item"
                value={item}
                onChange={(e) => {
                  setItem(e.target.value);
                  setMessage("");
                }}
                className="form-control "
                placeholder="add item"
              />
              <button onClick={AddItem} type="button" className="btn btn-dark">
                add item
              </button>
            </section>
            {message && (
              <section className="alert alert-danger alert-dismissible fade show">
                <strong>{message}</strong>
              </section>
            )}
          </section>

          <section className="col-md-7">
            <p>Item List </p>
            <ul>
              {fullist.list.length > 0 && (
                <React.Fragment>
                  <button
                    onClick={() => fullist.clearList()}
                    type="button"
                    className="btn btn-danger btn-sm mb-3 mt-0"
                  >
                    Clear All
                  </button>
                  {fullist.list.map((list, index) => (
                    <li key={index} className="my-auto">
                      <section className="card my-auto">
                        <section className="card-body">
                          <section className="hstack gap-1">
                            <span>{list.item}</span>
                            <span className="vr" />
                            <button
                              onClick={() => fullist.removeItem(list.id)}
                              type="button"
                              className="btn btn-sm btn-danger"
                            >
                              {buttontitle ? buttontitle : "Remove"}
                            </button>
                          </section>
                        </section>
                      </section>
                    </li>
                  ))}
                </React.Fragment>
              )}

              {fullist.list.length === 0 && (
                <p className="text-danger border p-2 text-center">
                  No Item to display
                </p>
              )}
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
};

export default DomList;
