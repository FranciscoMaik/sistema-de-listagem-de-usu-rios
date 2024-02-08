import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles"
import { api } from "../../../../services/api";
import { IUser } from "../../../types/IUser";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    updateList: () => Promise<void>;
    children?: React.ReactNode;
  }

export const ModalAddUser: React.FC<ModalProps> = ({ isOpen, onClose, children, updateList }) => {
    const [user, setUser] = useState<Partial<IUser>>({
      age: 0,
      email: "",
      name: "",
      phone: ""
    })
    
    const sendInfoNewUser = async() => {
      if(!user.name) {
        alert("Preencha o campo nome")
        return
      }

      if(!user.email) {
        alert("Preencha o campo email")
        return
      }

      if(!user.phone) {
        alert("Preencha o campo telefone")
        return
      }

      if(!user.age) {
        alert("Preencha o campo idade")
        return
      }

      try {
        await api.post(`/users`, {
          age: user.age,
          email: user.email,
          name: user.name,
          phone: user.phone,
        })

        await updateList()

        alert("Usuário cadastrado com sucesso")

        setUser({
          age: 0,
          email: "",
          name: "",
          phone: ""
        })
        
      } catch (error) {
        console.error(error);
      }
    }
    
    if (!isOpen) return null;
    
    return (
      <S.Overlay onClick={onClose}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
          {user && (
            <S.ShowInfos>
              <p>Informe os dados do usuário</p>
              <S.DisplayInfos>
                <div>
                  <strong>Nome: </strong>
                  <input type="text" value={user?.name} onChange={(text) => setUser(prev => {
                    return {
                      ...prev,
                      name: text.target.value
                    }
                  })}/>
                </div>

                <div>
                  <strong>Email: </strong>
                  <input type="text" value={user?.email} onChange={(text) => setUser(prev => {
                    return {
                      ...prev,
                      email: text.target.value
                    }
                  })}/>
                </div>

                <div>
                  <strong>Telefone: </strong>
                  <input type="text" value={user?.phone} onChange={(text) => setUser(prev => {
                    return {
                      ...prev,
                      phone: text.target.value
                    }
                  })}/>
                </div>

                <div>
                  <strong>Idade: </strong>
                  <input type="text" value={user?.age} onChange={(text) => setUser(prev => {
                    return {
                      ...prev,
                      age: Number(text.target.value)
                    }
                  })}/>
                </div>
              </S.DisplayInfos>
            </S.ShowInfos>
          )}

          <div className="button">
            <S.ButtonClosed onClick={onClose} colorSelect="red">Fechar</S.ButtonClosed>
            <S.ButtonClosed onClick={sendInfoNewUser} colorSelect="green">Salvar</S.ButtonClosed>
          </div>
        </S.ModalContent>
      </S.Overlay>
    );
  };