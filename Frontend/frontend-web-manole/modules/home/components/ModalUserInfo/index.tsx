import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles"
import { api } from "../../../../services/api";
import { IUser } from "../../../types/IUser";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
    children?: React.ReactNode;
  }

export const ModalUserInfo: React.FC<ModalProps> = ({ isOpen, onClose, children, id }) => {
    const [user, setUser] = useState<IUser | null>(null)
    
    const searchInfoUser = async() => {
      try {
        const { data } = await api.get(`/users/${id}`)
        setUser(data.user)
        
      } catch (error) {
        console.error(error);
      }
    }
    
    useEffect(() => {
      if(!id) return
      searchInfoUser()
    },[id, searchInfoUser])
    
    
    if (!isOpen || !id) return null;
    
    return (
      <S.Overlay onClick={onClose}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
          {user && (
            <S.ShowInfos>
              <p>{user.name}</p>
              <S.DisplayInfos>
                <div>
                  <strong>Email: </strong>
                  <p>{user.email}</p>
                </div>

                <div>
                  <strong>Telefone: </strong>
                  <p>{user.phone}</p>
                </div>

                <div>
                  <strong>Idade: </strong>
                  <p>{user.age} anos</p>
                </div>
              </S.DisplayInfos>
            </S.ShowInfos>
          )}

          <div className="button">
            <S.ButtonClosed onClick={onClose}>Fechar</S.ButtonClosed>
          </div>
        </S.ModalContent>
      </S.Overlay>
    );
  };